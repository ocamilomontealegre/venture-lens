import type { MutableRefObject } from "react";
import type { CameraType } from "react-camera-pro";

export interface IUseCamera {
  readonly cameraRef: MutableRefObject<CameraType | null>;
  readonly image: string | null;
  readonly takePicture: () => void;
  readonly resetPicture: () => void;
  readonly handleUpload: () => Promise<void>;
  readonly uploading: boolean;
  readonly uploadError: string | null;
}
