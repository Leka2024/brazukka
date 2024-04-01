// Copyright (c) 2024 Brazukka B.V. Nederland. All Rights Reserved.
import { AnimationMetadata, AnimationTriggerMetadata, animate,  animateChild,  group, query, style, transition, trigger } from "@angular/animations";

export class RouteAnimationBuilder {
    private metaDataName: string | undefined;

    name(name: string): RouteAnimationBuilder {
        this.metaDataName = name;
        return this;
    }

    build(): any{
        return {
            name: this.metaDataName
        }
    }
}