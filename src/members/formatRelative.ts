import { formatRelative as _formatRelative } from "date-fns";
import { reactify } from "@vueuse/core";

export const formatRelative = reactify(_formatRelative);