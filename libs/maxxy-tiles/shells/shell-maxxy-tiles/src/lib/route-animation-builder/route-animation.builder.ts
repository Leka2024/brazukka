// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.
import { AnimationMetadata, AnimationTriggerMetadata, animate,  animateChild,  group, query, style, transition, trigger } from "@angular/animations";
import { TransitionBuilder } from "./transition.builder";

export class RouteAnimationBuilder {
    private withName: string | undefined;
    private withTransitions: AnimationMetadata[] = [];

    name(name: string): RouteAnimationBuilder {
        this.withName = name;
        return this;
    }

    transition(): TransitionBuilder {
        return new TransitionBuilder();
    }

    build(): AnimationTriggerMetadata {
        if (!this.withName ) {
            throw Error('name is required');
        }
        
        return trigger(this.withName, [
            transition('* <=> *', [
              group([
                // Animation for leaving element
                query(':leave', [
                  style({ transform: 'translateX(0%)' }),
                  animate('3.4s ease-in-out', style({ transform: 'translateX(100%)' }))
                ], { optional: true }),
            
                // Animation for entering element after leave animation completes
                query(':enter', [
                  style({ transform: 'translateX(-100%)' }),
                  animate('3.4s ease-in-out', style({ transform: 'translateX(0%)' }))
                ], { optional: true }),
              ])
            ])
          ]);
    }
}