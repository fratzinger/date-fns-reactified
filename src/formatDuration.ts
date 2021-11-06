import { formatDuration as _formatDuration } from "date-fns";
import { reactify } from "@vueuse/core";

export const formatDuration = reactify(_formatDuration);