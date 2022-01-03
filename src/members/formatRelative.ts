import { formatRelative as _formatRelative } from "date-fns";
import { reactify } from "@vueuse/shared";

export const formatRelative = reactify(_formatRelative);