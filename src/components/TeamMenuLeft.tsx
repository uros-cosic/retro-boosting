import React, { useContext } from "react";
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
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { AiOutlineMenu } from "react-icons/ai";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";

function TeamMenuLeft({
  options,
  setOptions,
}: {
  options: {
    searchVal: string;
    boosterChecked: boolean;
    coachChecked: boolean;
    server: string;
    language: string;
  };
  setOptions: any;
}) {
  return (
    <>
      <div className="hidden lg:flex flex-col py-5 px-10 rounded-xl bg-dark border border-primary h-fit space-y-10   shadow-base shadow-primary mr-5">
        <div className="space-y-2">
          <Label htmlFor="teamMenuSearch">Search</Label>
          <Input
            id="teamMenuSearch"
            className="border-primary border w-44"
            value={options.searchVal}
            onChange={(e) => {
              setOptions((prev: any) => {
                return { ...prev, searchVal: e.target.value };
              });
            }}
            autoComplete="off"
          />
        </div>
        <div className="flex flex-col space-y-5">
          <div className="flex items-center space-x-2">
            <Checkbox
              id="teamMenuBoosterCB"
              onCheckedChange={(checked) => {
                setOptions((prev: any) => {
                  return { ...prev, boosterChecked: checked };
                });
              }}
              checked={options.boosterChecked}
            />
            <Label htmlFor="teamMenuBoosterCB" className="cursor-pointer">
              booster
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="teamMenuCoachCB"
              onCheckedChange={(checked) => {
                setOptions((prev: any) => {
                  return { ...prev, coachChecked: checked };
                });
              }}
              checked={options.coachChecked}
            />
            <Label htmlFor="teamMenuCoachCB" className="cursor-pointer">
              coach
            </Label>
          </div>
        </div>
        <div className="flex flex-col space-y-5">
          <Label>server</Label>
          <Select
            onValueChange={(val) => {
              setOptions((prev: any) => {
                return { ...prev, server: val };
              });
            }}
            value={options.server}
          >
            <SelectTrigger className="border border-primary w-44">
              <SelectValue placeholder={options.server} />
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
          <Select
            onValueChange={(val) => {
              setOptions((prev: any) => {
                return { ...prev, language: val };
              });
            }}
            value={options.language}
          >
            <SelectTrigger className="border border-primary w-44">
              <SelectValue placeholder={options.language} />
            </SelectTrigger>
            <SelectContent className="border border-primary">
              <SelectItem value="any">any</SelectItem>
              <SelectItem value="EN">English</SelectItem>
              <SelectItem value="DE">German</SelectItem>
              <SelectItem value="SR">Serbian</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button
          className="bg-primary w-full   hover:bg-primary/90"
          onClick={() => {
            setOptions({
              searchVal: "",
              boosterChecked: false,
              coachChecked: false,
              server: "any",
              language: "any",
            });
          }}
        >
          Clear
        </Button>
      </div>
      <div className="mr-5">
        <Dialog>
          <DialogTrigger className="block lg:hidden text-3xl hover:text-light/80">
            <AiOutlineMenu />
          </DialogTrigger>
          <DialogContent className="w-full flex flex-col items-center justify-center bg-dark text-light   border-primary">
            <div className="space-y-2">
              <Label htmlFor="teamMenuSearch">Search</Label>
              <Input
                id="teamMenuSearch"
                className="border-primary border w-44"
                value={options.searchVal}
                onChange={(e) => {
                  setOptions((prev: any) => {
                    return { ...prev, searchVal: e.target.value };
                  });
                }}
                autoComplete="off"
              />
            </div>
            <div className="flex flex-col space-y-5 w-44">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="teamMenuBoosterCB"
                  onCheckedChange={(checked) => {
                    setOptions((prev: any) => {
                      return { ...prev, boosterChecked: checked };
                    });
                  }}
                  checked={options.boosterChecked}
                />
                <Label htmlFor="teamMenuBoosterCB" className="cursor-pointer">
                  booster
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="teamMenuCoachCB"
                  onCheckedChange={(checked) => {
                    setOptions((prev: any) => {
                      return { ...prev, coachChecked: checked };
                    });
                  }}
                  checked={options.coachChecked}
                />
                <Label htmlFor="teamMenuCoachCB" className="cursor-pointer">
                  coach
                </Label>
              </div>
            </div>
            <div className="flex flex-col space-y-5">
              <Label>server</Label>
              <Select
                onValueChange={(val) => {
                  setOptions((prev: any) => {
                    return { ...prev, server: val };
                  });
                }}
                value={options.server}
              >
                <SelectTrigger className="border border-primary w-44">
                  <SelectValue placeholder={options.server} />
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
              <Select
                onValueChange={(val) => {
                  setOptions((prev: any) => {
                    return { ...prev, language: val };
                  });
                }}
                value={options.language}
              >
                <SelectTrigger className="border border-primary w-44">
                  <SelectValue placeholder={options.language} />
                </SelectTrigger>
                <SelectContent className="border border-primary">
                  <SelectItem value="any">any</SelectItem>
                  <SelectItem value="EN">English</SelectItem>
                  <SelectItem value="DE">German</SelectItem>
                  <SelectItem value="SR">Serbian</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              className="bg-primary w-44   hover:bg-primary/90"
              onClick={() => {
                setOptions({
                  searchVal: "",
                  boosterChecked: false,
                  coachChecked: false,
                  server: "any",
                  language: "any",
                });
              }}
            >
              Clear
            </Button>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}

export default TeamMenuLeft;
