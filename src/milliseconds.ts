import { milliseconds as _milliseconds } from "date-fns";
import { reactify } from "@vueuse/core";

export const milliseconds = reactify(_milliseconds);