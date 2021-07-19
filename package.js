Package.describe({
  name: "planable:constellation",
  version: "0.4.12",
  summary: "A curated set of packages for Constellation",
  git: "https://github.com/Planable/constellation-distro.git",
  documentation: "README.md",
  debugOnly: true,
});

Package.onUse(function (api) {
  api.versionsFrom("2.3");

  api.use("constellation:console@1.4.7");
  api.use("babrahams:temple@0.4.7");
  api.use("constellation:subscriptions@0.4.7");
  api.use("constellation:session@0.4.7");
  api.use("constellation:autopublish@0.4.7");
  api.use("constellation:tiny@0.4.7");
  api.use("constellation:position@0.4.7");
  // api.use('lai:ddp-inspector@1.1.9');
  api.use("constellation:plugins@0.4.9");

  api.imply("constellation:console");
});

Package.onTest(function(api) {
  api.use('tinytest');
});
