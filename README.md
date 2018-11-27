# Endorsement Platform

Linkedin's endorsement system is not reliable, this will be a partnered attempt to create a trustworthy endorsement platform.

More contextual information can be found here: https://medium.com/p/b08e5242e6f9/edit 

More information regarding our technical and software product development journey can be found here: 
https://medium.com/p/edd163cff10b/edit

A wireframe for our platform can be found here: https://sketch.cloud/s/q8nW2

# Specification

**1. User Stories**

    1. A new user will log-in so that their information is saved.

    2. A new user will be able to see the landing page upon login, which will contain a list of available skills.

    3. A new user will pick a specific skill they want to endorse or be endorsed in i.e. JavaScript.

    4. When the new user clicks on a skill, the user will be able to see all the other users being endorsed for the respective skill in the "approved" nav-bar tab.

    5. The new user will not be able to endorse others until the new user becomes an "approved" user for the respective skill.

    6. For the new user to become "approved", the user will have 10 endorsements.

    7. Once they are "approved", they will be able to endorse others for the skill they applied for.

**2. Back-log:**

    a. New users can apply to a skill they want to be endorsed in. 

    b. The "approval" system for a new user in order to be endorsed will be much more specific, they will have to apply with project(s) to be reviewed by 
    
    moderators in order to be approved. Later on, the users that will "moderated" will also be allowed to themselves moderate for new applicants.

    c. Users can pick multiple skills they want to endorse or be endorsed in.

    d. Users will be able to have Weighted endorsement.

    e. Users will be able to un-endorse other users. 

    f. Endorsement incentive i.e. if user A endorses user B for skill X and user B gets a job closely related to skill X, user A will get a one-time cash reward.


# High-level Issues

    Q1. Why does your platform only cater to industry specific coding skills like JavaScript?
    A1. Because it is easier to apply metrics that can be measured to a specific skill, and from there an appropriate "mastery level" can be determined. We have 
    
    intentionally left out soft-skills like "leadership" as it is multifaceted and much more difficult to measure accurately.

    Q2. How will people endorse others when they can't even see their work on the platform?
    A2. For now, we will have people post github repositories but we will eventually implement a feature to host code for others to see. 

    Q3. How will our endorsement algorithm affect user visibility near the top?
    A3. Another complicated issue, we have still to fully flesh out the mechanics of this. Definitely something that will be looked at very closely at a later date.

    Q4. Problems we have yet digest
    A4. How will new users want to get endorsed by others of a higher "rank"?