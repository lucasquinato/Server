/**
 * @file routes.js
 * @fileoverview
 */

import { handlerResponse } from "./handlers/handlerResponse.js";
import { Router } from "express";

/**
 * @public
 * @exports
 * @constant routes
 */
export const routes = Router();

routes.get(["/", "/enter-account/"], (req, res) => handlerResponse({ res, defaultPage: "index" }));