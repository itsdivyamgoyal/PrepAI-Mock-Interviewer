import { Interview } from "@/types";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import { TooltipButton } from "./tooltip-button";
import { Eye, Newspaper, Sparkles, Trash2 } from "lucide-react";

import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/config/firebase.config";
import { toast } from "sonner";

interface InterviewPinProps {
  interview: Interview;
  onMockPage?: boolean;
}

export const InterviewPin = ({
  interview,
  onMockPage = false,
}: InterviewPinProps) => {
  const navigate = useNavigate();

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this interview?\n\nThis action cannot be undone."
    );

    if (!confirmDelete) return;

    try {
      // Delete interview document
      await deleteDoc(doc(db, "interviews", interview.id));

      // Delete all answers related to this interview
      const q = query(
        collection(db, "userAnswers"),
        where("mockIdRef", "==", interview.id)
      );

      const snapshot = await getDocs(q);

      await Promise.all(snapshot.docs.map((d) => deleteDoc(d.ref)));

      toast.success("Interview deleted successfully.");

      // Refresh page
      window.location.reload();
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete interview.");
    }
  };

  return (
    <Card className="p-4 rounded-md shadow-none hover:shadow-md shadow-gray-100 cursor-pointer transition-all space-y-4">
      <CardTitle className="text-lg">{interview?.position}</CardTitle>
      <CardDescription>{interview?.description}</CardDescription>
      <div className="w-full flex items-center gap-2 flex-wrap">
        {interview?.techStack.split(",").map((word, index) => (
          <Badge
            key={index}
            variant={"outline"}
            className="text-xs text-muted-foreground hover:border-emerald-400 hover:bg-emerald-50 hover:text-emerald-900"
          >
            {word}
          </Badge>
        ))}
      </div>

      <CardFooter
        className={cn(
          "w-full flex items-center p-0",
          onMockPage ? "justify-end" : "justify-between"
        )}
      >
        <p className="text-[12px] text-muted-foreground truncate whitespace-nowrap">
          {`${new Date(interview?.createdAt.toDate()).toLocaleDateString(
            "en-US",
            { dateStyle: "long" }
          )} - ${new Date(interview?.createdAt.toDate()).toLocaleTimeString(
            "en-US",
            { timeStyle: "short" }
          )}`}
        </p>

        {!onMockPage && (
          <div className="flex items-center justify-center">
            <TooltipButton
              content="View"
              buttonVariant={"ghost"}
              onClick={() => {
                navigate(`/generate/${interview?.id}`, { replace: true });
              }}
              disbaled={false}
              buttonClassName="hover:text-sky-500"
              icon={<Eye />}
              loading={false}
            />

            <TooltipButton
              content="Feedback"
              buttonVariant={"ghost"}
              onClick={() => {
                navigate(`/generate/feedback/${interview?.id}`, {
                  replace: true,
                });
              }}
              disbaled={false}
              buttonClassName="hover:text-yellow-500"
              icon={<Newspaper />}
              loading={false}
            />

            <TooltipButton
              content="Start"
              buttonVariant={"ghost"}
              onClick={() => {
                navigate(`/generate/interview/${interview?.id}`, {
                  replace: true,
                });
              }}
              disbaled={false}
              buttonClassName="hover:text-sky-500"
              icon={<Sparkles />}
              loading={false}
            />
            <TooltipButton
              content="Delete"
              buttonVariant="ghost"
              onClick={handleDelete}
              disbaled={false}
              buttonClassName="hover:text-red-500"
              icon={<Trash2 />}
              loading={false}
            />
          </div>
        )}
      </CardFooter>
    </Card>
  );
};
