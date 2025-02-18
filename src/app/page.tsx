import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

function page() {
  return (
    <div className="bg-slate-700 items-center justify-center flex flex-col h-screen">
      <h1>Mc Donalds</h1>
      <Button>Buscar</Button>
      <Input></Input>
    </div>
  );
}

export default page;
