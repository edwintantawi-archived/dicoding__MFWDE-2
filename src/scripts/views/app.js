import AppShellInitiator from '../utils/appshell-initiator';

class App {
  constructor({ toggler, drawer, header }) {
    this._toggler = toggler;
    this._drawer = drawer;
    this._header = header;

    this._initialAppShell();
  }

  _initialAppShell() {
    AppShellInitiator.init({
      toggler: this._toggler,
      drawer: this._drawer,
      header: this._header,
    });
  }
}

export default App;
