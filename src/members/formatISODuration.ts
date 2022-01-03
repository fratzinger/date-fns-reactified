import { formatISODuration as _formatISODuration } from "date-fns";
import { reactify } from "@vueuse/shared";

export const formatISODuration = reactify(_formatISODuration);