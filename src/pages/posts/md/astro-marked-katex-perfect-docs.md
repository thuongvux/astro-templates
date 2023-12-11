---
layout: "#layouts/Markdown.astro"
authors: "Thuong Vu, Flash"
title: "Astro, Marked & KaTeX - Perfect docs"
cover: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/LaTeX_project_logo_bird.svg/1200px-LaTeX_project_logo_bird.svg.png"
releaseDate: "2023-11-01"
---

# Norm and Inner Product

1. **Define** the $\ell^1$ -norm on $\R^n$ by $$|x|_1 = \sum_{i=1}^n |x^i|,$$
   and define the on $\R^n$ by

   $$|x|_\infty = \sup\left\{|x^i|\right\}.$$

   Show that these satisfy Theorem-1.

2. Prove that $|x|\leq\sum_{i=1}^n |x^i|$. In other words, the usual norm is no greater than the $\ell^1\text{-norm}$.

3. Prove that $|x-y| \leq |x| + |y|$. (Compare this with part (2) of Theorem-1.) When does equality hold?

4. Prove that $ \big| |x| - |y| \big| \leq |x-y|$.

5. The quantity $|y-x|$ is called the distance between $x$ and $y$. Prove and interpret the _“triangle inequality”_:

   $$|z-x| \leq |z-y| + |y-x|.$$

6. Let $f$ and $g$ be integrable on $[a,b]$.

   - Prove the integral version of the Cauchy-Schwarz [inequality](#id):

   $$
   \left|\int_a^b fg\right| \leq \left(\int_a^b
   f^2\right)^{1/2}\left(\int_a^b g^2\right)^{1/2}.
   $$

   Hint: Consider separately the cases $0 = \int_a^b(f-t g)^2$ for
   some $t\in\R$, and $0<\int_a^b(f-t g)^2$ for all $t\in\R$.

   - If equality holds, must $f=tg$ for some $t\in\R$? What if $f$ and $g$ are continuous?

   - Show that the Cauchy-Schwarz inequality is a special case of

7. A linear transformation $T:\R^n\longrightarrow\R^n$ is _norm preserving_ if

   $$|T(x)|=|x|,$$

   for all $x\in\R^n$, and _inner product preserving_ if

   $$\braket{Tx,Ty}=xy,$$

   for all $x,y\in\R^n$.

   - Prove that $T$ is norm preserving if and only if it is inner
     product preserving.

   - Prove that such a linear transformation is 1-1, and $T^{-1}$ is
     norm preserving (and inner product preserving).

8. If $T:\R^m\longrightarrow\R^n$ is a linear transformation, show that there is a
   number $M$ such that $|T(h)|\leq M|h|$ for all $h\in\R^m$. \
   Hint: Estimate $|T(h)|$ in terms of $|h|$ and the entries in the matrix for $T$.

9. If $x,y\in\R^n$, and $z,w\in\R^m$, show that $\braket{(x,z)}{(y,w)} = \braket{xy} \braket{zw}$, and $|(x,z)|=\sqrt{|x|^2 + |z|^2}$.
   Note that $(x,z)$ and $(y,w)$ denote points in $\R^{n+m}$.

10. If $x,y\in\R^n$, then $x$ and $y$ are called _perpendicular_ (or _orthogonal_),
    and we write $x\perp y$, if $\braket{xy} = 0$. If $x\perp y$, prove that $|x+y|^2 = |x|^2 + |y|^2$.
