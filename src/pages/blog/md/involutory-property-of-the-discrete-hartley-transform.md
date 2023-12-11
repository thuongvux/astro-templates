---
layout: "🌈/Markdown.astro"
authors: "Frank the Giant Bunny"
title: "Involutory Property of the Discrete Hartley Transform"
cover: "https://images.unsplash.com/photo-1527193874670-bf698eaa3d47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
releaseDate: "2023-11-16"
---

Given a column vector $x\in\mathbb{R}^n$, its _Discrete Hartley Transform_
(DHT) is defined as another vector $y\in\mathbb{R}^n$ such that

$$
  y_j = \frac{1}{\sqrt n}\sum_{i=0}^{n-1}x_i
  \mathrm{cas}\left(\tfrac{2\pi}{n}ij\right)
  \quad\text{for}\quad j\in\set{0,\cdots,n-1}
$$

where the $cas$ function is defined as $\mathrm{cas}\theta = \cos\theta + \sin\theta$.
Interestingly, the DHT is an _involution_; that is, the DHT is the same as the
inverse DHT.

$$
x_i = \frac{1}{\sqrt n}\sum_{j=0}^{n-1}y_j
  \mathrm{cas}\left(\tfrac{2\pi}{n}ij\right)
  \quad\text{for}\quad i\in\set{0,\cdots,n-1}
$$

This paper proves the DHT is indeed an involution.

### **Target Equality**

To simplify (1) and (2), define an $n\times n$ symmetric matrix $H$ whose $(i,j)\text{-entry}$
is $\frac{1}{\sqrt n}\mathrm{cas}\left(\frac{2\pi}{n}ij\right)$. Then the DHT and the inverse DHT are

$$ y = Hx \quad\text{and}\quad x = Hy $$

where $x={\begin{bmatrix}x_0,\cdots,x_{n-1}\end{bmatrix}}^\intercal$
and $y={\begin{bmatrix}y_0,\cdots,y_{n-1}\end{bmatrix}}^\intercal$.

Then proving the involutory property of the DHT reduces to showing that $H^2=I$ where $I$
is an $n\times n$ identity matrix. This further reduces to showing that the rows in $H$ are orthogonal;
that is,

$$\braket{h_i, h_{i'}} = \begin{cases} 1, &\text{if}\:i=i' \\ 0, &\text{otherwise;}\end{cases}$$

where $h_i=\tfrac{1}{\sqrt n}\begin{bmatrix}{\left(\tfrac{2\pi}{n}i_0\right),\cdots,\mathrm{cas}\left(\tfrac{2\pi}{n}i_{n-1}\right)}\end{bmatrix}$
is the $i_{\mathrm{th}}$ row in $H$. It may be written in terms of $\mathrm{cas}$ functions as

$$
\sum_{j=0}^{n-1}
  \mathrm{cas}\left(\tfrac{2\pi}{n}ij\right)\mathrm{cas}\left(\tfrac{2\pi}{n}i'j\right) =
  \begin{cases}
    n, &\text{if}\:i=i' \\
    0, &\text{otherwise;}
  \end{cases}
$$

which is the target equality for the involutory property.

### **CAS Identity**

The proof of begins with an identity about $\mathrm{cas}$ functions.

$$\mathrm{cas}\alpha\mathrm{cas}\beta = \sin(\alpha+\beta) + \cos(\alpha-\beta)$$

A $\mathrm{cas}(\cdot)$ can be simplified to $\cos(\cdot)$ as follows:

$$
\mathrm{cas}\theta=\cos\theta+\sin\theta
=\sqrt{2}\left(\frac{1}{\sqrt 2}\cos\theta+\frac{1}{\sqrt 2}\sin\theta\right)
=\sqrt{2}\cos\left(\theta - \frac{\pi}{4}\right)\tag{$\ast$}
$$

$$
\begin{alignat}{2}
  \mathrm{cas}\alpha\mathrm{cas}\beta
  &=
  \sqrt{2}\cos\left(\alpha - \frac{\pi}{4}\right)
  \cdot
  \sqrt{2}\cos\left(\beta - \frac{\pi}{4}\right)
  &
  \quad\quad\text{by }
  \\
  &=
  \cos\left(\alpha + \beta - {\frac \pi 2}\right)
  +
  \cos(\alpha - \beta)
  &
  \quad\quad
  2\cos\theta\cos\phi
  =
  \cos(\theta+\phi) + \cos(\theta-\phi)
  \\
  &=
  \sin(\alpha + \beta) + \cos(\alpha - \beta)
  &
  \quad\quad
  \cos\left(\theta-\frac{\pi}{2}\right) = \sin\theta
\end{alignat}
$$

which completes the proof.

### **Target Simplified**

The target equality is decomposed into two summations by

$$
\sum_{j=0}^{n-1}
  \mathrm{cas}\left(\tfrac{2\pi}{n}ij\right) \mathrm{cas}\left(\tfrac{2\pi}{n}i'j\right)
  =
  \sum_{j=0}^{n-1} \sin\left(\tfrac{2\pi}{n}(i+i')j\right)
  +
  \sum_{j=0}^{n-1} \cos\left(\tfrac{2\pi}{n}(i-i')j\right)
$$

The above will be interpreted as the real and imaginary parts in
geometric progressions of complex numbers:

$$
\sum_{j=0}^{n-1}
  \mathrm{cas}\left(\tfrac{2\pi}{n}ij\right) \mathrm{cas}\left(\tfrac{2\pi}{n}i'j\right)
  =
  \Im\left\{\sum_{j=0}^{n-1} \omega^{(i+i')j} \right\}
  +
  \Re\left\{\sum_{j=0}^{n-1} \omega^{(i-i')j} \right\}
$$

where $\omega$ is the _primitive_ $n^{\mathrm{th}}$ root of unity $\omega=\exp(\iota 2\pi/n) = \cos(2\pi/n) + \iota\sin(2\pi/n)$.
The identity is easily proved by the De Moivre's identity.

### **Summation Lemma**

The last puzzle to the involutory property proof is the summation
of a geometric series:

$$
\text{For an integer $k$,}\quad
\sum_{j=0}^{n-1}(\omega^k)^j =
\begin{cases}
    n, & \text{if $k$ is a multiple of $n$;} \\
    0, & \text{otherwise.}
\end{cases}
$$

This lemma ensures that the imaginary part of $\sum_{j=0}^{n-1}(\omega^k)^j$ is zero regardless of the integer value $k$.
On the other hand, the real part is $n$ if $k$ is a multiple of $n$ and zero otherwise. Plugging in theses values to the
RHS of yields the desired identity, which completes the involutory property proof.
