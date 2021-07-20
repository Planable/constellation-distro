Package.describe({
  name: "planable:constellation",
  version: "0.4.27",
  summary: "A curated set of packages for Constellation",
  git: "https://github.com/Planable/constellation-distro.git",
  documentation: "README.md",
  debugOnly: true,
});

Package.onUse(function (api) {
  api.versionsFrom("2.3");

  api.use("planable:console@1.4.11");
  // api.use("planable:temple@0.4.11");
  // api.use("planable:subscriptions@0.4.10");
  // api.use("planable:session@0.4.12");
  api.use("planable:autopublish@0.4.11");
  api.use("planable:tiny@0.4.11");
  api.use("planable:position@0.4.11");
  // api.use('lai:ddp-inspector@1.1.9');
  api.use("planable:plugins@0.4.11");

  api.imply("planable:console");
});

Package.onTest(function(api) {
  api.use('tinytest');
});
