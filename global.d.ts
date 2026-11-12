import { MetamaskInpageProvider} from "@metamask/providers";

declare global {
    interface Window {
        ethereum? : MetamaskInpageProvider;
    }
}

export {};