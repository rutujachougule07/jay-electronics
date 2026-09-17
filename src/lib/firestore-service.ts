import {
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import type { HeroSlide, AboutData, TeamMember, ContactInquiry } from "./admin-store";

export type BlogPostDoc = {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  date: string;
  image: string;
  readTime: string;
  tags: string[];
};

// Firestore Collection Names
export const COLLECTIONS = {
  INQUIRIES: "inquiries",
  HERO_SLIDES: "hero_slides",
  ABOUT_DATA: "about_data",
  TEAM_MEMBERS: "team_members",
  BLOGS: "blogs",
};

// 1. INQUIRIES / CONTACT FORMS
export async function submitContactInquiryToFirestore(data: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}) {
  try {
    const now = new Date();
    const dateStr =
      now.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      }) +
      " " +
      now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });

    const docRef = await addDoc(collection(db, COLLECTIONS.INQUIRIES), {
      ...data,
      date: dateStr,
      status: "New",
      createdAt: serverTimestamp(),
    });

    return { id: docRef.id, ...data, date: dateStr, status: "New" };
  } catch (err) {
    console.error("Error submitting inquiry to Firestore:", err);
    throw err;
  }
}

export function subscribeInquiriesFromFirestore(
  callback: (inquiries: ContactInquiry[]) => void
) {
  const q = query(collection(db, COLLECTIONS.INQUIRIES));
  return onSnapshot(
    q,
    (snapshot) => {
      const items: ContactInquiry[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<ContactInquiry, "id">),
      }));
      callback(items);
    },
    (err) => {
      console.warn("Firestore inquiry subscription fallback:", err);
    }
  );
}

export async function updateInquiryStatusInFirestore(
  id: string,
  status: "New" | "In Progress" | "Resolved"
) {
  const docRef = doc(db, COLLECTIONS.INQUIRIES, id);
  await updateDoc(docRef, { status });
}

export async function deleteInquiryFromFirestore(id: string) {
  const docRef = doc(db, COLLECTIONS.INQUIRIES, id);
  await deleteDoc(docRef);
}

// 2. HERO SLIDES
export function subscribeHeroSlidesFromFirestore(
  callback: (slides: HeroSlide[]) => void
) {
  const q = query(collection(db, COLLECTIONS.HERO_SLIDES));
  return onSnapshot(
    q,
    (snapshot) => {
      if (snapshot.empty) return;
      const items: HeroSlide[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<HeroSlide, "id">),
      }));
      callback(items);
    },
    (err) => console.warn("Firestore slides listener warn:", err)
  );
}

export async function saveHeroSlideToFirestore(slide: HeroSlide) {
  const docRef = doc(db, COLLECTIONS.HERO_SLIDES, slide.id);
  await setDoc(docRef, slide, { merge: true });
}

// 3. ABOUT DATA
export async function getAboutDataFromFirestore(): Promise<AboutData | null> {
  try {
    const docRef = doc(db, COLLECTIONS.ABOUT_DATA, "main");
    const snap = await getDoc(docRef);
    if (snap.exists()) {
      return snap.data() as AboutData;
    }
  } catch (err) {
    console.warn("Error getting about data from Firestore:", err);
  }
  return null;
}

export async function saveAboutDataToFirestore(aboutData: AboutData) {
  const docRef = doc(db, COLLECTIONS.ABOUT_DATA, "main");
  await setDoc(docRef, aboutData);
}

// 4. TEAM MEMBERS
export function subscribeTeamMembersFromFirestore(
  callback: (members: TeamMember[]) => void
) {
  const q = query(collection(db, COLLECTIONS.TEAM_MEMBERS));
  return onSnapshot(
    q,
    (snapshot) => {
      if (snapshot.empty) return;
      const items: TeamMember[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<TeamMember, "id">),
      }));
      callback(items);
    },
    (err) => console.warn("Firestore team listener warn:", err)
  );
}

export async function addTeamMemberToFirestore(member: Omit<TeamMember, "id">) {
  const docRef = await addDoc(collection(db, COLLECTIONS.TEAM_MEMBERS), member);
  return { id: docRef.id, ...member };
}

export async function updateTeamMemberInFirestore(id: string, updated: Partial<TeamMember>) {
  const docRef = doc(db, COLLECTIONS.TEAM_MEMBERS, id);
  await updateDoc(docRef, updated);
}

export async function deleteTeamMemberFromFirestore(id: string) {
  const docRef = doc(db, COLLECTIONS.TEAM_MEMBERS, id);
  await deleteDoc(docRef);
}

// 5. BLOGS
export function subscribeBlogsFromFirestore(
  callback: (blogs: BlogPostDoc[]) => void
) {
  const q = query(collection(db, COLLECTIONS.BLOGS));
  return onSnapshot(
    q,
    (snapshot) => {
      const items: BlogPostDoc[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<BlogPostDoc, "id">),
      }));
      callback(items);
    },
    (err) => console.warn("Firestore blogs listener warn:", err)
  );
}

export async function addBlogToFirestore(blog: Omit<BlogPostDoc, "id">) {
  const docRef = await addDoc(collection(db, COLLECTIONS.BLOGS), {
    ...blog,
    createdAt: serverTimestamp(),
  });
  return { id: docRef.id, ...blog };
}

export async function deleteBlogFromFirestore(id: string) {
  const docRef = doc(db, COLLECTIONS.BLOGS, id);
  await deleteDoc(docRef);
}
