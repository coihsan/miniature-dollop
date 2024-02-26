import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { pricingCards } from "@/lib/constants";
import { stripe } from "@/lib/stripe";
import clsx from "clsx";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // const prices = await stripe.prices.list({
  //   product: process.env.NEXT_PLURA_PRODUCT_ID,
  //   active: true,
  // });

  return (
    <>
      <section className="h-full w-full md:pt-44 mt-[-70px] relative flex items-center justify-center flex-col dark:bg-zinc-950">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:invert bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="flex flex-col mt-6">
        <p className="text-center font-semibold">Run your agency, in one place</p>
        <h1 className="text-center text-7xl font-bold">MangoLabs</h1>
        <Image className="rounded-lg mt-6 shadow-xl" src={'/preview.png'} width={700} height={600} alt="preview" />
        </div>
        <div className="flex justify-center items-center flex-col gap-4 md:!mt-20 mt-[-60px]">
        <h2 className="text-4xl text-center font-bold"> Choose what fits you right</h2>
        <p className="text-muted-foreground text-center font-medium">
          Our straightforward pricing plans are tailored to meet your needs. If
          {" you're"} not <br />
          ready to commit you can get started for free.
        </p>
        <div className="flex  justify-center gap-4 flex-wrap mt-6">
          {pricingCards.map((card) =>(
            <Card key={card.title} className={clsx('w-[300px] flex flex-col justify-between', {
              'border-2 border-primary': card.title === 'Unlimited Saas',
            })}>
              <CardHeader>
                <CardTitle className={clsx('', {
                    'text-muted-foreground': card.title !== 'Unlimited Saas',
                  })}>{card.title}</CardTitle>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <span className="text-4xl font-bold">{card.price}</span>
                <span className="text-muted-foreground">/m</span>
              </CardContent>
              <CardFooter className="flex flex-col items-center gap-4">
                <div>
                  {card.features.map(( feature ) =>(
                    <div key={feature} className="flex items-center gap-2">
                      <Check/>
                      <p>{feature}</p>
                    </div>
                  ))}
                </div>
                <Link href={`/agency?plan${card.priceId}`} className={clsx('w-full text-center bg-primary p-2 rounded-md', {'!bg-muted-foreground' : card.title !== 'Unlimited Saas'})}>
                  Get Started
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        </div>
      </section>
    </>
  );
}