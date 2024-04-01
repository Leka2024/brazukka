// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.
import { AnimationTransitionMetadata, animate, group, query, style, transition } from "@angular/animations";

export class TransitionBuilder {
    private fromState: string | undefined;
    private toState: string | undefined;

    from(from: string): TransitionBuilder {
        this.fromState = from;
        return this;
    }

    to(to: string): TransitionBuilder {
        this.toState = to;
        return this;
    }

    build(): AnimationTransitionMetadata {
        if (!this.fromState ) {
            throw Error('from is required');
        }

        if (!this.toState ) {
            throw Error('to is required');
        }
        
        return transition(`${this.fromState} <=> ${this.toState}`, [
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
            ]);
    }
}