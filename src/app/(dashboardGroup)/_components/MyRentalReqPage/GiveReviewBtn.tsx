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
        <div className="bg-amber-600 text-slate-200 hover:bg-amber-700 cursor-pointer">
          Give Review
        </div>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md bg-surface">
        <DialogHeader>
          <DialogTitle>Give Your Review</DialogTitle>
        </DialogHeader>

        <form action={action} className="space-y-5">
          {/* hidden property id */}
          <input type="hidden" name="propertyId" value={propertyId} />

          {/* Rating */}
          <div>
            <label className="block text-sm font-medium mb-2">Rating</label>

            <div className="flex gap-2">
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
                    className="hidden"
                  />

                  <Star
                    size={30}
                    className={`transition ${
                      star <= rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Content */}
          <div>
            <label htmlFor="content" className="block text-sm font-medium mb-2">
              Review
            </label>

            <Textarea
              id="content"
              name="content"
              placeholder="Write your experience..."
              rows={5}
              required
            />
          </div>

          {/* Error / Success */}
          {state?.message && (
            <p className="text-sm text-red-500">{state.message}</p>
          )}

          <Button type="submit" disabled={isPending} className="w-full">
            {isPending ? "Submitting..." : "Submit Review"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default GiveReviewBtn;
