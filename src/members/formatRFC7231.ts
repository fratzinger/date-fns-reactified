import { formatRFC7231 as _formatRFC7231 } from "date-fns";
import { reactify } from "@vueuse/shared";

export const formatRFC7231 = reactify(_formatRFC7231);