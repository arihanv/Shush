import { CodeBlock } from "./ui/codeblock";

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CodeHost() {
  return (
    <div>
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <CodeBlock
            fileName="modal_app.py"
            language="python"
            value={`def hello():
    print("Hello World")        
            `}
            />
        </TabsContent>
        <TabsContent value="password">Hello</TabsContent>
      </Tabs>
    </div>
  );
}
