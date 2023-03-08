import { StackContext, StaticSite } from "sst/constructs";

export function Web({ stack }: StackContext) {
  const site = new StaticSite(stack, "site", {
    path: "static",
    customDomain: {
      domainName: "adsingh.click",
      domainAlias: "www.adsingh.click",
      hostedZone: "adsingh.click",
    },
  });
  stack.addOutputs({
    SITE: site.url || "https://localhost",
  });
}
