import { formatDistanceToNow as _formatDistanceToNow } from "date-fns";
import { reactify } from "@vueuse/core";

export const formatDistanceToNow = reactify(_formatDistanceToNow);