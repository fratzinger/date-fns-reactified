import { formatISO as _formatISO } from "date-fns";
import { reactify } from "@vueuse/core";

export const formatISO = reactify(_formatISO);