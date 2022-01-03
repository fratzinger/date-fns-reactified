import { formatDuration as _formatDuration } from "date-fns";
import { reactify } from "@vueuse/shared";

export const formatDuration = reactify(_formatDuration);