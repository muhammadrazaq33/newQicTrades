"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import { HelpCircle } from "lucide-react";

export default function FaqAccordion() {
  return (
    <Card className="rounded-2xl border border-[#E8EAEE] bg-white shadow-sm">
      <CardHeader className="">
        <CardTitle className="sm:text-[20px] text-[16px] font-bold text-[#111827]">
          Frequently Asked Questions
        </CardTitle>
      </CardHeader>
      <CardContent className="">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="border-0">
            <div className="rounded-lg border-2 border-[#EEF1F4]">
              <AccordionTrigger className="px-4 py-4 text-left text-[14px] sm:text-[17px] font-medium text-[#6B7280] hover:no-underline">
                <span className="text-[#111827]">
                  How does affiliate tracking work?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-0 text-[14px] text-[#4B5563]">
                We use unique referral links and cookies to attribute
                conversions to your account accurately.
              </AccordionContent>
            </div>
          </AccordionItem>

          <AccordionItem value="item-2" className="border-0 mt-3">
            <div className="rounded-lg border-2 border-[#EEF1F4]">
              <AccordionTrigger className="px-4 py-4 text-left sm:text-[17px] text-[14px] font-medium text-[#6B7280] hover:no-underline">
                <span className="text-[#111827]">
                  How does affiliate tracking work?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-0 text-[14px] text-[#4B5563]">
                Payouts are processed weekly once your available balance reaches
                the minimum threshold.
              </AccordionContent>
            </div>
          </AccordionItem>

          <AccordionItem value="item-3" className="border-0 mt-3">
            <div className="rounded-lg border-2 border-[#EEF1F4]">
              <AccordionTrigger className="px-4 py-4 text-left sm:text-[17px] text-[14px] font-medium text-[#6B7280] hover:no-underline">
                <span className="text-[#111827]">
                  How does affiliate tracking work?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-0 text-[14px] text-[#4B5563]">
                Yes, resellers are eligible for the program and follow the same
                commission structure.
              </AccordionContent>
            </div>
          </AccordionItem>

          <AccordionItem value="item-4" className="border-0 mt-3">
            <div className="rounded-lg border-2 border-[#EEF1F4]">
              <AccordionTrigger className="px-4 py-4 text-left sm:text-[17px] text-[14px] font-medium text-[#6B7280] hover:no-underline">
                <span className="text-[#111827]">
                  How does affiliate tracking work?
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 pt-0 text-[14px] text-[#4B5563]">
                Inactive referrals don’t generate commissions until they resume
                eligible activity.
              </AccordionContent>
            </div>
          </AccordionItem>
        </Accordion>
      </CardContent>
      <CardFooter>
        {/*  */}
        <div className="sm:mt-3 mt-1 rounded-[10px] border border-[#E8EAEE] bg-[#EFF6FF] shadow-sm w-full p-5 sm:p-8">
          <div className="">
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex items-start gap-3">
                <div className="flex sm:h-12 h-9 sm:w-12 w-9 items-center justify-center rounded-full bg-white shrink-0">
                  <HelpCircle className="sm:h-6 h-5 sm:w-6 w-5 text-[#009CFF]" />
                </div>
                <div>
                  <div className="sm:text-[17px] text-[14px] font-medium text-[#111827]">
                    Need more help?
                  </div>
                  <p className="mt-[3px] sm:text-[17px] text-[11px] text-[#4B5563]">
                    Our support team is ready to answer any questions about the
                    affiliate program.
                  </p>
                  <Button
                    className="mt-2 md:mt-2.5 rounded-[7px] px-6 py-5 text-[14px] font-medium text-white hover:bg-[#1855C8]"
                    style={{
                      background:
                        "linear-gradient(180deg, #009CFF 0%, #63C3FF 100%)",
                    }}
                    variant="default"
                  >
                    Contact Support
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
