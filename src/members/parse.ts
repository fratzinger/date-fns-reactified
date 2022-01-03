import { parse as _parse } from "date-fns";
import { reactify } from "@vueuse/core";

export const parse = reactify(_parse);