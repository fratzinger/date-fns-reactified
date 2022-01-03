import { milliseconds as _milliseconds } from "date-fns";
import { reactify } from "@vueuse/shared";

export const milliseconds = reactify(_milliseconds);