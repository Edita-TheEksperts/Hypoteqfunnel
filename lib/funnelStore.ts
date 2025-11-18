import { create } from "zustand";

export type ProjectType = "neu" | "ablosung" | null;

interface FunnelState {
  customerType: "direct" | "partner" | null;
  setCustomerType: (c: "direct" | "partner") => void;

  projectType: ProjectType;
  setProjectType: (p: ProjectType) => void;

  borrowerType: "natuerlich" | "juristisch" | null;
  setBorrowerType: (b: "natuerlich" | "juristisch") => void;

  // START DATA
  client: any;
  setClient: (data: any) => void;
}

export const useFunnelStore = create<FunnelState>((set) => ({
  customerType: null,
  setCustomerType: (c) => set({ customerType: c }),

  projectType: null,
  setProjectType: (p) => set({ projectType: p }),

  borrowerType: null,
  setBorrowerType: (b) => set({ borrowerType: b }),

  client: {},
  setClient: (data) => set({ client: data }),
}));
