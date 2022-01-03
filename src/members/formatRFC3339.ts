import { formatRFC3339 as _formatRFC3339 } from "date-fns";
import { reactify } from "@vueuse/shared";

export const formatRFC3339 = reactify(_formatRFC3339);