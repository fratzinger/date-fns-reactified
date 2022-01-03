import { formatDistanceToNow as _formatDistanceToNow } from "date-fns";
import { reactify } from "@vueuse/shared";

export const formatDistanceToNow = reactify(_formatDistanceToNow);