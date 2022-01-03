import { parseISO as _parseISO } from "date-fns";
import { reactify } from "@vueuse/shared";

export const parseISO = reactify(_parseISO);