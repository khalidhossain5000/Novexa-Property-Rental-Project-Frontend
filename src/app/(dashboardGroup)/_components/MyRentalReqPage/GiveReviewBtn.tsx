"use client";

import React, { useActionState, useState } from "react";
import { makeReview } from "../../_actions/reviewActions";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Star } from "lucide-react";

interface GiveReviewBtnProps {
  propertyId: string;
}

const GiveReviewBtn = ({ propertyId }: GiveReviewBtnProps) => {
  const [state, action, isPending] = useActionState(makeReview, null);
  const [rating, setRating] = useState(0);

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center gap-2 cursor-pointer bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 px-3 py-2 rounded-sm shadow-sm font-inter hover:scale-105 hover:bg-emerald-300 transition duration-400">
          Give Review
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md bg-primary dark:bg-background border-none">
        <DialogHeader>
          <DialogTitle className="font-lora text-center">
            Give Your Review
          </DialogTitle>
        </DialogHeader>

        <form action={action} className="space-y-5">
          {/* hidden property id */}
          <input type="hidden" name="propertyId" value={propertyId} />

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium mb-2 font-inter text-center">
              Rating
            </label>

            <div className="flex gap-2 justify-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <label
                  key={star}
                  className="cursor-pointer"
                  onClick={() => setRating(star)}
                >
                  <input
                    type="radio"
                    name="rating"
                    value={star}
                    checked={rating === star}
                    onChange={() => setRating(star)}
                    className="hidden "
                  />

                  <Star
                    size={30}
                    className={`transition duration-300 cursor-pointer ${
                      star <= rating
                        ? "text-primary fill-secondary text-2xl "
                        : "text-accent"
                    }`}
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Content */}
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-medium mb-2 font-inter text-center"
            >
              Review
            </label>

            <Textarea
              id="content"
              name="content"
              placeholder="Write your experience..."
              rows={5}
              required
              className=" border-none transition-all duration-200 focus:outline-none focus:ring-1 focus:border-secondary"
            />
          </div>

          {/* Error / Success */}
          {state?.message && (
            <p className="text-sm text-red-500 font-lora">{state.message}</p>
          )}

          <div className="mx-auto text-center">
            <Button
              type="submit"
              disabled={isPending}
              className="cursor-pointer bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300 px-3 py-2 rounded-sm shadow-sm font-inter hover:scale-105 hover:bg-emerald-300 transition duration-400 text-center mx-auto"
            >
              {isPending ? "Submitting..." : "Submit Review"}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default GiveReviewBtn;
