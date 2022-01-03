import { formatISO9075 as _formatISO9075 } from "date-fns";
import { reactify } from "@vueuse/core";

export const formatISO9075 = reactify(_formatISO9075);