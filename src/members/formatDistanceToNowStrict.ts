import { formatDistanceToNowStrict as _formatDistanceToNowStrict } from "date-fns";
import { reactify } from "@vueuse/shared";

export const formatDistanceToNowStrict = reactify(_formatDistanceToNowStrict);