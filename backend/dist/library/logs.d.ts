declare class Logging {
    static info: (args: any) => Promise<void>;
    static warn: (args: any) => Promise<void>;
    static error: (args: any) => Promise<void>;
}
export default Logging;
