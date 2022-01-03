import { formatISO as _formatISO } from "date-fns";
import { reactify } from "@vueuse/shared";

export const formatISO = reactify(_formatISO);