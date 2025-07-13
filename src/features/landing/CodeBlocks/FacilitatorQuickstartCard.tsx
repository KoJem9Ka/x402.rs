'use client';
import { Card, CardBody, CardHeader } from '@heroui/card';
import { codeJSToHtml, codeRustToHtml } from '@/shared/utils/code-to-html';
import { Divider } from '@heroui/divider';
import { cn } from '@/shared/utils/cn';
import { Tab, Tabs } from '@heroui/tabs';
import { useState } from 'react';
import { CONFIG } from '@/shared/backbone/config';


enum ActiveTab {
  ExpressJS = 'express.js',
  HonoJS = 'hono.js',
  RustAxum = 'rust-axum',
}

export function FacilitatorQuickstartCard({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState(ActiveTab.ExpressJS);

  const code = codeMap[activeTab];

  return (
    <Card className={cn(className)}>
      <CardHeader className='relative'>
        <div className='w-full flex justify-between items-center gap-3'>
          <span className='text-xl font-bold tracking-tight'>Facilitator quickstart</span>

          <Tabs size='sm' selectedKey={activeTab} onSelectionChange={setActiveTab as never}>
            <Tab key={ActiveTab.ExpressJS} title='Express.js' />
            <Tab key={ActiveTab.HonoJS} title='Hono.js' />
            <Tab key={ActiveTab.RustAxum} title='Rust Axum' />
          </Tabs>
        </div>
      </CardHeader>

      <Divider />

      <CardBody
        dangerouslySetInnerHTML={{ __html: code }}
        className='~[&>pre]:p-4 ~[&>pre]:rounded-medium'
      />
    </Card>
  );
}


const codeMap = {
  [ActiveTab.ExpressJS]: codeJSToHtml(`
import express from "express";
import { paymentMiddleware, Network } from "x402-express";

const app = express();

// Configure the payment middleware
app.use(paymentMiddleware(
  "0xYourAddress",
  {
    "/protected-route": {
      price: "$0.10",
      network: "base-sepolia",
      config: {
        description: "Access to premium content",
      }
    }
  },
  {
    url: "${CONFIG.facilitatorUrl.href}" // 👈 Facilitator URL
  }
));
`.trim()),
  [ActiveTab.HonoJS]: codeJSToHtml(`
import { Hono } from "hono";
import { paymentMiddleware, Network } from "x402-hono";

const app = new Hono();

// Configure the payment middleware
app.use(paymentMiddleware(
  "0xYourAddress",
  {
    "/protected-route": {
      price: "$0.01",
      network: "base-sepolia",
      config: {
        description: "Access to premium content",
      }
    }
  },
  {
    url: "${CONFIG.facilitatorUrl.href}" // 👈 Facilitator URL
  }
));
`.trim()),
  [ActiveTab.RustAxum]: codeRustToHtml(`
use axum::Router;
use x402_axum::{IntoPriceTag, X402Middleware};
use x402_rs::network::{Network, USDCDeployment};
use x402_rs::telemetry::Telemetry;    

// 👉  👉  👉  👉  👉  👉  👉  👉  👇 Facilitator URL
let x402 = X402Middleware::try_from("${CONFIG.facilitatorUrl.href}").unwrap();

let usdc = USDCDeployment::by_network(Network::BaseSepolia)
    .pay_to("0xYourAddress");

let app = Router::new()
    .route(
        "/protected-route",
        get(my_handler).layer(
            x402.with_description("Access to premium content")
                .with_price_tag(usdc.amount(0.10).unwrap()),
        ),
    )
`.trim()),
};
