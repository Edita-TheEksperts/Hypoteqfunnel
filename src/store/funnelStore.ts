import { create } from "zustand";

interface FunnelState {
  customerType: "direct" | "partner" | null;
  client: any;
  project: any;
  property: any;
  borrowers: any[];
  financing: any;
  documents: any[];

 email: string | null;      
  setEmail: (email: string) => void;

  setCustomerType: (type: "direct" | "partner") => void;
  setClient: (data: any) => void;
  setProject: (data: any) => void;
  setProperty: (data: any) => void;
  setBorrowers: (data: any[]) => void;
  setFinancing: (data: any) => void;
  addDocument: (file: any) => void;
}

export const useFunnelStore = create<FunnelState>((set) => ({
  customerType: null,
  client: {},
  project: {},
  property: {},
  borrowers: [],
  financing: {},
  documents: [],

  
  email: null,                       

  setEmail: (email) => set({ email }),

  setCustomerType: (type) => set({ customerType: type }),
  setClient: (data) => set({ client: data }),
  setProject: (data) => set({ project: data }),
  setProperty: (data) => set({ property: data }),
  setBorrowers: (data) => set({ borrowers: data }),
  setFinancing: (data) => set({ financing: data }),
  addDocument: (file) =>
    set((state) => ({ documents: [...state.documents, file] })),
}));
