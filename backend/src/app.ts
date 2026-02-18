import { join } from "node:path";
import AutoLoad, { AutoloadPluginOptions } from "@fastify/autoload";
import { FastifyPluginAsync, FastifyServerOptions } from "fastify";
import Fastify from "fastify";

export interface AppOptions
  extends FastifyServerOptions, Partial<AutoloadPluginOptions> {}

const options: AppOptions = {
  routerOptions: {
    ignoreTrailingSlash: true,
  },
};

const appPlugin: FastifyPluginAsync<AppOptions> = async (
  fastify,
  opts,
): Promise<void> => {
  void fastify.register(AutoLoad, {
    dir: join(__dirname, "plugins"),
    options: opts,
  });

  void fastify.register(AutoLoad, {
    dir: join(__dirname, "routes"),
    options: opts,
  });
};

export const app = Fastify(options);
app.register(appPlugin);

export default appPlugin;
export { options };
