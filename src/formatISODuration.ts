import { formatISODuration as _formatISODuration } from "date-fns";
import { reactify } from "@vueuse/core";

export const formatISODuration = reactify(_formatISODuration);