document.addEventListener("DOMContentLoaded", function () {
  const yeti = new Yeti();

  // Default
    yeti.show({
      message: "This is a default Yeti alert!",
    });

  // Default (Button)
  document.getElementById("show-btn").addEventListener("click", () => {
    yeti.show({
      message: "This is a default Yeti alert! open by a button click event.",
    });
  });

  // Severity
  const getMessage = (severity) =>
    `You clicked the ${severity} button. Here is your YETI ${severity}!`;

  document.getElementById("info-btn").addEventListener("click", () => {
    yeti.show({
      message: getMessage("info"),
    });
  });
  document.getElementById("ok-btn").addEventListener("click", () => {
    yeti.show({
      message: getMessage("ok"),
      severity: "ok",
    });
  });
  document.getElementById("warn-btn").addEventListener("click", () => {
    yeti.show({
      message: getMessage("warn"),
      severity: "warn",
    });
  });
  document.getElementById("nok-btn").addEventListener("click", () => {
    yeti.show({
      message: getMessage("nok"),
      severity: "nok",
    });
  });

  // Titles
  document.getElementById("info-btn-2").addEventListener("click", () => {
    yeti.show({
      title: "YETI INFO",
      message: getMessage("info"),
    });
  });
  document.getElementById("ok-btn-2").addEventListener("click", () => {
    yeti.show({
      title: "YETI OK",
      message: getMessage("ok"),
      severity: "ok",
    });
  });
  document.getElementById("warn-btn-2").addEventListener("click", () => {
    yeti.show({
      title: "YETI WARN",
      message: getMessage("warn"),
      severity: "warn",
    });
  });
  document.getElementById("nok-btn-2").addEventListener("click", () => {
    yeti.show({
      title: "YETI NOK",
      message: getMessage("nok"),
      severity: "nok",
    });
  });

  // Not fade on next alert
  document.getElementById("info-btn-3").addEventListener("click", () => {
    yeti.show({
      message: getMessage("info"),
      fadeOnNext: false
    });
  });
  document.getElementById("ok-btn-3").addEventListener("click", () => {
    yeti.show({
      message: getMessage("ok"),
      severity: "ok",
      fadeOnNext: false
    });
  });
  document.getElementById("warn-btn-3").addEventListener("click", () => {
    yeti.show({
      message: getMessage("warn"),
      severity: "warn",
      fadeOnNext: false
    });
  });
  document.getElementById("nok-btn-3").addEventListener("click", () => {
    yeti.show({
      message: getMessage("nok"),
      severity: "nok",
      fadeOnNext: false
    });
  });

  // Timer (duration)
  document.getElementById("info-btn-4").addEventListener("click", () => {
    yeti.show({
      message: 'This alert will last 0,5s',
      fadeOnNext: false,
      time: 500
    });
  });
  document.getElementById("ok-btn-4").addEventListener("click", () => {
    yeti.show({
      message: 'This alert will last 1s',
      severity: "ok",
      fadeOnNext: false,
      time: 1000
    });
  });
  document.getElementById("warn-btn-4").addEventListener("click", () => {
    yeti.show({
      message: 'This alert will last 2s',
      severity: "warn",
      fadeOnNext: false,
      time: 2000
    });
  });
  document.getElementById("nok-btn-4").addEventListener("click", () => {
    yeti.show({
      message: 'This alert will last 3s',
      severity: "nok",
      fadeOnNext: false,
      time: 3000
    });
  });

  // Styles
  document.getElementById("info-btn-5").addEventListener("click", () => {
    yeti.show({
      message: 'Alert without shadow neither border',
      shadow: false
    });
  });
  document.getElementById("ok-btn-5").addEventListener("click", () => {
    yeti.show({
      message: 'Alert With border',
      border: 1
    });
  });
  document.getElementById("warn-btn-5").addEventListener("click", () => {
    yeti.show({
      message: 'Alert with left border',
      severity: "warn",
      border: 2
    });
  });
  document.getElementById("nok-btn-5").addEventListener("click", () => {
    yeti.show({
      message: 'Alert with border, but no shadow',
      severity: "nok",
      shadow: false,
      border: 1,
    });
  });
  
});
