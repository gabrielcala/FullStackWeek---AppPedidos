import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

function page() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-700">
      <h1>Mc Donalds</h1>
      <Button>Buscar</Button>
      <Input></Input>
    </div>
  );
}

export default page;
