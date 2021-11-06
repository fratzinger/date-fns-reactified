import { parseISO as _parseISO } from "date-fns";
import { reactify } from "@vueuse/core";

export const parseISO = reactify(_parseISO);