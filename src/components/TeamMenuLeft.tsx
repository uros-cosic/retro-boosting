import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Checkbox } from "./ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Button } from "./ui/button";

function TeamMenuLeft() {
  return (
    <div className="py-5 px-10 rounded-xl bg-black border border-primary h-fit space-y-10 uppercase shadow-base shadow-primary">
      <div className="space-y-2">
        <Label htmlFor="teamMenuSearch">Search</Label>
        <Input id="teamMenuSearch" className="border-primary border w-44" />
      </div>
      <div className="flex flex-col space-y-5">
        <div className="flex items-center space-x-2">
          <Checkbox id="teamMenuBoosterCB" />
          <Label htmlFor="teamMenuBoosterCB">booster</Label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="teamMenuCoachCB" />
          <Label htmlFor="teamMenuCoachCB">coach</Label>
        </div>
      </div>
      <div className="flex flex-col space-y-5">
        <Label>server</Label>
        <Select>
          <SelectTrigger className="border border-primary w-44">
            <SelectValue placeholder="any" />
          </SelectTrigger>
          <SelectContent className="border border-primary">
            <SelectItem value="any">any</SelectItem>
            <SelectItem value="EUW">Europe West</SelectItem>
            <SelectItem value="NA">North America</SelectItem>
            <SelectItem value="EUNE">Europe Nordic East</SelectItem>
            <SelectItem value="RU">Russia</SelectItem>
            <SelectItem value="TR">Turkey</SelectItem>
          </SelectContent>
        </Select>
        <Label>language</Label>
        <Select>
          <SelectTrigger className="border border-primary w-44">
            <SelectValue placeholder="any" />
          </SelectTrigger>
          <SelectContent className="border border-primary">
            <SelectItem value="any">any</SelectItem>
            <SelectItem value="EN">English</SelectItem>
            <SelectItem value="DE">German</SelectItem>
            <SelectItem value="SR">Serbian</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button className="bg-primary w-full uppercase hover:bg-primary/90">
        Clear
      </Button>
    </div>
  );
}

export default TeamMenuLeft;
