module.exports = {
  apps : [{
    name   : "msib-latihan-restfull",
    script : "./src/app/app.js",
    watch: true,
    exec_mode: "cluster",
    isntance: "max"
  }]
}
