import { registerOTel } from '@vercel/otel';
 
export function register() {
  registerOTel({ serviceName: 'nextjs-dd-otel' });
}