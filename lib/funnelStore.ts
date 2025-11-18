"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export type ProjectType = "neu" | "ablosung" | null;
export type BorrowerType = "natuerlich" | "juristisch" | null;

interface ClientData {
  firstName: string;
  lastName: string;
  email: string;
  zip: string;
}

interface PropertyData {
  propertyType: "bestehend" | "neubau" | null;
  neubauType: "erstellt" | "projekt" | null;
  liegenschaftType:
    | "einfamilienhaus"
    | "wohnung"
    | "mehrfamilienhaus"
    | "misch"
    | null;
  usage:
    | "selbstbewohnt"
    | "rendite"
    | "zweitwohnsitz"
    | "vermietet_teilweise"
    | null;
  hasRenovation: "ja" | "nein" | null;
  renovationAmount: string;
  isReserved: "ja" | "nein" | null;
  hasOffers: "ja" | "nein" | null;
  offersDetails: string;

  bank: string;
  zins: string;
  laufzeit: string;
}

interface BorrowerData {
  vorname: string;
  name: string;
  geburtsdatum: string;
  angestellt: string;
  zivilstand: string;
  firmenname?: string;
}

interface FinancingNeu {
  kaufpreis: string;
  eigenmittelBar: string;
  eigenmittelSaeule3: string;
  eigenmittelPK: string;
  eigenmittelAndere: string;
  pkVerpfaendung: "ja" | "nein" | null;
  laufzeit: "saron" | "fest" | "mix" | "weissnicht" | null;
  einkommen: string;
  steueroptimiert: "ja" | "nein" | null;
  kaufdatum: string;
  kommentar: string;
}

interface FinancingAbloesung {
  hypothekBetrag: string;
  erhoehung: "ja" | "nein" | null;
  erhoehungBetrag: string;
  steueroptimiert: "ja" | "nein" | null;
  abloesedatum: string;
  kommentar: string;
}

interface FunnelState {
  client: ClientData;
  projectType: ProjectType;
  borrowerType: BorrowerType;
  customerType: "direct" | "partner" | null;

  property: PropertyData;
  financingNeu: FinancingNeu;
  financingAbloesung: FinancingAbloesung;

  borrowers: BorrowerData[];

  setCustomerType: (type: "direct" | "partner") => void;
  setClient: (data: Partial<ClientData>) => void;
  setProjectType: (type: ProjectType) => void;
  setBorrowerType: (type: BorrowerType) => void;
  setProperty: (data: Partial<PropertyData>) => void;
  setFinancingNeu: (data: Partial<FinancingNeu>) => void;
  setFinancingAbloesung: (data: Partial<FinancingAbloesung>) => void;

  addBorrower: () => void;
  updateBorrower: (i: number, f: keyof BorrowerData, v: string) => void;
  removeBorrower: (i: number) => void;

  reset: () => void;
}

const initialState = {
  customerType: null,

  client: {
    firstName: "",
    lastName: "",
    email: "",
    zip: "",
  },

  projectType: null,
  borrowerType: null,

  property: {
    propertyType: null,
    neubauType: null,
    liegenschaftType: null,
    usage: null,
    hasRenovation: null,
    renovationAmount: "",
    isReserved: null,
    hasOffers: null,
    offersDetails: "",
    bank: "",
    zins: "",
    laufzeit: "",
  },

  financingNeu: {
    kaufpreis: "",
    eigenmittelBar: "",
    eigenmittelSaeule3: "",
    eigenmittelPK: "",
    eigenmittelAndere: "",
    pkVerpfaendung: null,
    laufzeit: null,
    einkommen: "",
    steueroptimiert: null,
    kaufdatum: "",
    kommentar: "",
  },

  financingAbloesung: {
    hypothekBetrag: "",
    erhoehung: null,
    erhoehungBetrag: "",
    steueroptimiert: null,
    abloesedatum: "",
    kommentar: "",
  },

  borrowers: [
    {
      vorname: "",
      name: "",
      geburtsdatum: "",
      angestellt: "",
      zivilstand: "",
      firmenname: "",
    },
  ],
};

export const useFunnelStore = create<FunnelState>()(
  persist(
    (set, get) => ({
      ...initialState,

      setCustomerType: (type) => set({ customerType: type }),

      setClient: (data) =>
        set((s) => ({ client: { ...s.client, ...data } })),

      setProjectType: (type) => set({ projectType: type }),
      setBorrowerType: (type) => set({ borrowerType: type }),

      setProperty: (data) =>
        set((s) => ({ property: { ...s.property, ...data } })),

      setFinancingNeu: (data) =>
        set((s) => ({ financingNeu: { ...s.financingNeu, ...data } })),

      setFinancingAbloesung: (data) =>
        set((s) => ({ financingAbloesung: { ...s.financingAbloesung, ...data } })),

      addBorrower: () =>
        set((s) => ({
          borrowers: [
            ...s.borrowers,
            {
              vorname: "",
              name: "",
              geburtsdatum: "",
              angestellt: "",
              zivilstand: "",
              firmenname: "",
            },
          ],
        })),

      updateBorrower: (i, field, value) =>
        set((s) => {
          const arr = [...s.borrowers];
          arr[i][field] = value;
          return { borrowers: arr };
        }),

      removeBorrower: (i) =>
        set((s) => ({
          borrowers: s.borrowers.filter((_, idx) => idx !== i),
        })),

      // ✅ FIX: reset i sigurt për persist
      reset: () => {
        set(() => initialState);

        if (typeof window !== "undefined") {
          localStorage.removeItem("funnel-storage");
        }
      },
    }),

    {
      name: "funnel-storage",
      storage: typeof window !== "undefined" ? localStorage : undefined,
    }
  )
);
